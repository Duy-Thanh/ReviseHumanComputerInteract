#include <windows.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "base64.h"

#define ID_INPUT_EDIT       1001
#define ID_OUTPUT_EDIT      1002
#define ID_ENCODE_BUTTON    1003
#define ID_DECODE_BUTTON    1004
#define ID_CLEAR_BUTTON     1005
#define ID_COPY_BUTTON      1006

#define MAX_BUFFER_SIZE 4096

// Global variables
HWND hInputEdit, hOutputEdit;
HINSTANCE hInst;

// Function prototypes
LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam);
void OnEncode(HWND hwnd);
void OnDecode(HWND hwnd);
void OnClear(HWND hwnd);
void OnCopy(HWND hwnd);

int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow) {
    hInst = hInstance;

    // Register window class
    WNDCLASSEX wc = { 0 };
    wc.cbSize = sizeof(WNDCLASSEX);
    wc.style = CS_HREDRAW | CS_VREDRAW;
    wc.lpfnWndProc = WindowProc;
    wc.hInstance = hInstance;
    wc.hCursor = LoadCursor(NULL, IDC_ARROW);
    wc.hbrBackground = (HBRUSH)(COLOR_WINDOW + 1);
    wc.lpszClassName = L"Base64EncoderDecoder";
    wc.hIcon = LoadIcon(NULL, IDI_APPLICATION);
    wc.hIconSm = LoadIcon(NULL, IDI_APPLICATION);

    if (!RegisterClassEx(&wc)) {
        MessageBox(NULL, L"Window Registration Failed!", L"Error", MB_ICONEXCLAMATION | MB_OK);
        return 0;
    }

    // Create window
    HWND hwnd = CreateWindowEx(
        WS_EX_CLIENTEDGE,
        L"Base64EncoderDecoder",
        L"Base64 Encoder/Decoder",
        WS_OVERLAPPEDWINDOW,
        CW_USEDEFAULT, CW_USEDEFAULT, 600, 500,
        NULL, NULL, hInstance, NULL
    );

    if (hwnd == NULL) {
        MessageBox(NULL, L"Window Creation Failed!", L"Error", MB_ICONEXCLAMATION | MB_OK);
        return 0;
    }

    ShowWindow(hwnd, nCmdShow);
    UpdateWindow(hwnd);

    // Message loop
    MSG msg;
    while (GetMessage(&msg, NULL, 0, 0) > 0) {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
    }

    return msg.wParam;
}

LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    switch (uMsg) {
    case WM_CREATE: {
        // Create input label
        CreateWindow(L"STATIC", L"Input Text:",
            WS_VISIBLE | WS_CHILD,
            10, 10, 100, 20,
            hwnd, NULL, hInst, NULL);

        // Create input edit box
        hInputEdit = CreateWindow(L"EDIT", L"",
            WS_VISIBLE | WS_CHILD | WS_BORDER | ES_MULTILINE | ES_AUTOVSCROLL | WS_VSCROLL,
            10, 35, 560, 150,
            hwnd, (HMENU)ID_INPUT_EDIT, hInst, NULL);

        // Create buttons
        CreateWindow(L"BUTTON", L"Encode",
            WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
            10, 200, 80, 30,
            hwnd, (HMENU)ID_ENCODE_BUTTON, hInst, NULL);

        CreateWindow(L"BUTTON", L"Decode",
            WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
            100, 200, 80, 30,
            hwnd, (HMENU)ID_DECODE_BUTTON, hInst, NULL);

        CreateWindow(L"BUTTON", L"Clear",
            WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
            190, 200, 80, 30,
            hwnd, (HMENU)ID_CLEAR_BUTTON, hInst, NULL);

        CreateWindow(L"BUTTON", L"Copy Output",
            WS_VISIBLE | WS_CHILD | BS_PUSHBUTTON,
            280, 200, 100, 30,
            hwnd, (HMENU)ID_COPY_BUTTON, hInst, NULL);

        // Create output label
        CreateWindow(L"STATIC", L"Output:",
            WS_VISIBLE | WS_CHILD,
            10, 245, 100, 20,
            hwnd, NULL, hInst, NULL);

        // Create output edit box
        hOutputEdit = CreateWindow(L"EDIT", L"",
            WS_VISIBLE | WS_CHILD | WS_BORDER | ES_MULTILINE | ES_AUTOVSCROLL | WS_VSCROLL | ES_READONLY,
            10, 270, 560, 150,
            hwnd, (HMENU)ID_OUTPUT_EDIT, hInst, NULL);

        // Set font for better appearance
        HFONT hFont = CreateFont(16, 0, 0, 0, FW_NORMAL, FALSE, FALSE, FALSE,
            DEFAULT_CHARSET, OUT_OUTLINE_PRECIS, CLIP_DEFAULT_PRECIS,
            CLEARTYPE_QUALITY, VARIABLE_PITCH, L"Segoe UI");

        SendMessage(hInputEdit, WM_SETFONT, (WPARAM)hFont, TRUE);
        SendMessage(hOutputEdit, WM_SETFONT, (WPARAM)hFont, TRUE);

        break;
    }

    case WM_COMMAND: {
        switch (LOWORD(wParam)) {
        case ID_ENCODE_BUTTON:
            OnEncode(hwnd);
            break;
        case ID_DECODE_BUTTON:
            OnDecode(hwnd);
            break;
        case ID_CLEAR_BUTTON:
            OnClear(hwnd);
            break;
        case ID_COPY_BUTTON:
            OnCopy(hwnd);
            break;
        }
        break;
    }

    case WM_SIZE: {
        // Handle window resizing
        RECT rect;
        GetClientRect(hwnd, &rect);
        int width = rect.right - rect.left;
        int height = rect.bottom - rect.top;

        // Resize controls
        SetWindowPos(hInputEdit, NULL, 10, 35, width - 20, (height - 100) / 2 - 50, SWP_NOZORDER);
        SetWindowPos(hOutputEdit, NULL, 10, (height - 100) / 2 + 85, width - 20, (height - 100) / 2 - 50, SWP_NOZORDER);
        break;
    }

    case WM_DESTROY:
        PostQuitMessage(0);
        break;

    default:
        return DefWindowProc(hwnd, uMsg, wParam, lParam);
    }
    return 0;
}

void OnEncode(HWND hwnd) {
    char input[MAX_BUFFER_SIZE];
    int len = GetWindowTextA(hInputEdit, input, MAX_BUFFER_SIZE - 1);

    if (len == 0) {
        MessageBox(hwnd, L"Please enter some text to encode!", L"Warning", MB_ICONWARNING | MB_OK);
        return;
    }

    size_t encoded_len;
    unsigned char* encoded = base64_encode((const unsigned char*)input, len, &encoded_len);

    if (!encoded) {
        MessageBox(hwnd, L"Encoding failed!", L"Error", MB_ICONERROR | MB_OK);
        return;
    }

    SetWindowTextA(hOutputEdit, (char*)encoded);
    free(encoded);
}

void OnDecode(HWND hwnd) {
    char input[MAX_BUFFER_SIZE];
    int len = GetWindowTextA(hInputEdit, input, MAX_BUFFER_SIZE - 1);

    if (len == 0) {
        MessageBox(hwnd, L"Please enter base64 text to decode!", L"Warning", MB_ICONWARNING | MB_OK);
        return;
    }

    size_t decoded_len;
    unsigned char* decoded = base64_decode((unsigned char*)input, len, &decoded_len);

    if (!decoded) {
        MessageBox(hwnd, L"Decoding failed! Invalid base64 input.", L"Error", MB_ICONERROR | MB_OK);
        return;
    }

    // Null-terminate for display
    decoded = realloc(decoded, decoded_len + 1);
    decoded[decoded_len] = '\0';

    SetWindowTextA(hOutputEdit, (char*)decoded);
    free(decoded);
}

void OnClear(HWND hwnd) {
    SetWindowText(hInputEdit, L"");
    SetWindowText(hOutputEdit, L"");
    SetFocus(hInputEdit);
}

void OnCopy(HWND hwnd) {
    char output[MAX_BUFFER_SIZE];
    int len = GetWindowTextA(hOutputEdit, output, MAX_BUFFER_SIZE - 1);

    if (len == 0) {
        MessageBox(hwnd, L"No output to copy!", L"Warning", MB_ICONWARNING | MB_OK);
        return;
    }

    if (OpenClipboard(hwnd)) {
        EmptyClipboard();

        HGLOBAL hClipboardData = GlobalAlloc(GMEM_DDESHARE, len + 1);
        char* pchData = (char*)GlobalLock(hClipboardData);

        // Use strcpy_s instead of strcpy for security
        errno_t result = strcpy_s(pchData, len + 1, output);
        if (result != 0) {
            GlobalUnlock(hClipboardData);
            GlobalFree(hClipboardData);
            CloseClipboard();
            MessageBox(hwnd, L"Failed to copy to clipboard!", L"Error", MB_ICONERROR | MB_OK);
            return;
        }

        GlobalUnlock(hClipboardData);
        SetClipboardData(CF_TEXT, hClipboardData);
        CloseClipboard();

        MessageBox(hwnd, L"Output copied to clipboard!", L"Success", MB_ICONINFORMATION | MB_OK);
    }
    else {
        MessageBox(hwnd, L"Failed to open clipboard!", L"Error", MB_ICONERROR | MB_OK);
    }
}