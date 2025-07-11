/*
 * Base64 encoding/decoding (RFC1341)
 * Copyright (c) 2005, Jouni Malinen <j@w1.fi>
 *
 * This software may be distributed under the terms of the BSD license.
 * See README for more details.
 * Copyright (C) 2025, Nguyen Duy Thanh <nekkochan0x0007@tutamail.com>
 */

#ifndef BASE64_H
#define BASE64_H

unsigned char* base64_encode(const unsigned char* src, size_t len,
	size_t* out_len);
unsigned char* base64_decode(const unsigned char* src, size_t len,
	size_t* out_len);

#endif /* BASE64_H */

