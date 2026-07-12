export const RegisterSchema = {
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

export const LoginSchema = {
    body: {
        type: "object",
        required: ["email", "password"],
        properties: {
            email: {
                type: "string",
                format: "email",
            },
            password: {
                type: "string",
                minLength: 6,
                maxLength: 12,
            },
        
        },
        additionalProperties: false,
    }
}