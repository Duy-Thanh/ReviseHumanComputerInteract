#include "base64.h"
#include <string.h>
#include <stdlib.h>
#include "DLL.h"

API_EXPORT char* dat0()
{
	const char* original = "aHR0cDovL2xvY2FsaG9zdDozMDAwLw==";
	size_t decoded_len;

	// Decode
	unsigned char* decoded = base64_decode((const unsigned char*)original, strlen(original), &decoded_len);
	if (!decoded) {
		return NULL;
	}

	// Ensure it's null-terminated before returning
	char* final = realloc(decoded, decoded_len + 1);
	if (!final) {
		free(decoded);
		return NULL;
	}

	final[decoded_len] = '\0';

	return final;
}