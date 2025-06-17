#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "base64.h"

#define MAX_BUFFER_SIZE 1024

int main() {
	char input[MAX_BUFFER_SIZE];
	size_t encoded_len, decoded_len;

	printf("Encoded/Decoded system\n\nCopyright (c) 2005-2011, Jouni Malinen <j@w1.fi>\nCopyright (C) 2025, Nguyen Duy Thanh <nekkochan0x0007@tutamail.com>\n\n");
	printf("Enter a string to encode: ");

	if (!fgets(input, sizeof(input), stdin)) {
		fprintf(stderr, "Error string input!\n");
		return 1;
	}

	// Remove newline if present
	size_t input_len = strlen(input);

	if (input_len > 0 && input[input_len - 1] == '\n') {
		input[input_len - 1] = '\0';
		input_len--;
	}

	// Encode user input
	unsigned char* encoded = base64_encode((const unsigned char*)input, input_len, &encoded_len);
	if (!encoded) {
		fprintf(stderr, "Encoding failed!\n");
		return 1;
	}

	printf("\nEncoded: %s\n", encoded);

	// Decode
	unsigned char* decoded = base64_decode(encoded, encoded_len, &decoded_len);
	if (!decoded) {
		fprintf(stderr, "Decoding failed!\n");
		return 1;
	}

	// Null-terminated decoded output
	decoded = realloc(decoded, decoded_len + 1);
	decoded[decoded_len] = '\0';

	printf("Decoded: %s\n", decoded);

	// Cleanup
	free(encoded);
	free(decoded);

	system("pause");

	return 0;
}