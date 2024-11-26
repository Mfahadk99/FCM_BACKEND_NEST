import * as admin from 'firebase-admin';
import * as path from 'path';

const serviceAccount = {
  "type": "service_account",
  "project_id": "my-first-host-website",
  "private_key_id": "bd4e2f0606b439931b827ded150f24697e7cdbdf",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCfBGvQpcX+zRDi\nnomCgBav1nESQLBlwtWfCxaEXPT0pf1xySTuicNgIFa6oQUd3dzFlJgTkHQYrgt/\nWrjhTXKP0U7PIdkA1csiZcVrCC8+qxzzTFhDdh0jo0r7WB19XnbXEj/qFIGYmNEi\n6sgbSuM7D7VYYBo0Am1TNenM6aNnuG3kqiz8iitXixnjX+sDjwszXXe7dlYZNXHi\ndmI9Rh1WZiM3Kau1Yhfkqe6oHYXJ6i3IVq23kGkSDYkupLlKp1hgsaqp524ICCa8\nZnkWvegm8KBID2y6vm/x630LK0rPBhPuGUAelXZ7Zo8Hf3UL7QCsIvF5ffkJqGnX\nyWIoBzcfAgMBAAECggEAPaWaIp5RvvFDDYgGqUf9A5gv57KacCjzZiAHT7M1565+\nLeGb5roTuy1uUhXghO6hCxwLRPJof7ThkjLan8XFlwm+8sAdf5xijuhDe7YFktcF\ndzDuuuCMdWd1xzEm5ZZ8ne5eRuJCR6Ve1pmMkEAdDaWOWT+QiP8z4OFyzVT6W1fg\n5JtODS93iz1FpIOHKJLpZboj1L7kXMOl2G+hHIEkdJP2OaS4kQzqxAq6/qBAaHdj\nhta2fPIpn9H6xVgS9ZMvlQW4D4utRARJPLw3fH8joAKff0lmIUfGiIVE2wC2mtWK\nkp/SK/4UTCnJbqKA/z+13E8GyK726LXbCwga8oiNUQKBgQC/mG/1McFPH/1WwqAp\nZA+YyC3+b8GY5kEFQnhSEB40Z7ujDNFQFEOaJ2z2e+2K6kyXpTJdp2jDT440SvcM\nf2mRFLD0iR9KtAM1TKKweRcdG96mm5al2YlbJwa+sRLTka5JSjxNbhcpkxjAvPDk\nI6nmZCZZxmL3ewOJsJwOQFbaJwKBgQDUeH/LwLF/LbOJxxdmfrhTeA6e3C2PEI4q\n0/1cyFfkXFGKvTPuY1k8Yw2kauhmZZ4rw1ZRA4DDfn0WujzPoUsq+e5XlSbYCJrx\nAMsqx1wWtlQwfOTl2KyInN5Xbu1LUrPXaiyZvZ6r69wiBKuwdSWuA8icGH4L/TXA\nEoKABXAuSQKBgEvccq/2BGFs/CVHKJ1a5iYLVNLCszf0K1iGyhdMFHmRfSUBJTt8\n2ouGAsnRpetz++GrYjbc20lCDb8803baWBU+yRX52S79+as37c7ME0/OQilbv5lp\nec5itHP6rsagjw6r2xaZeYhXmtxtsz/RsyrrCphPSc5Nocf56sBlzz3PAoGBALns\nB8hAAhIL58N0mCF0Wc+QixqwCJ3cGsuXXWnHVkHaFvCUx9Ce1wNkmhd6BYs0+MfK\n0slpi0+Ga+draLM3rRMaSVoShj8cqJij3SS99vNY8SrM32/Rvoh83IMd6j+zSvQB\nUK3no+VFKwgJlkN+/03aubz+Ia5UEKjWiaOFHrkhAoGBAK/U7Om87yOzsU9jOilg\nidXl4MjnR+Ddw0r94rnyRbo3KH38MFmkzW0kixDCCCKz1q0HqIv+FH/UBQevx3qI\nbiBBBwby5vfoqRjHdGnwG3YeDB38Ls6GOCqKOOresONWXuyuLC70OcapBuDHYBkg\ncUNYIoKhmSojqLYF7rGGisgy\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-ihos2@my-first-host-website.iam.gserviceaccount.com",
  "client_id": "116390637963044137557",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ihos2%40my-first-host-website.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
});

export const firebaseAdmin = admin;
