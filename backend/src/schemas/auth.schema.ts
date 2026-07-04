export const registerSchema = {
    body: {
        type: "object",
        required: ["name", "email", "password"],
        properties: {
            name: {
                type: "string",
                minLength: 2,
                maxLength: 100,
            },
            email: {
                type: "string",
                format: "email",
            },
            password: {
                type: "string",
                minLength: 6,
                maxLength: 18,
            },
        },
        additionalProperties: false,
    },
};