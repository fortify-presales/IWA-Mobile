import swaggerAutogen from 'swagger-autogen';
import config from 'config';

const appName: string = config.get('App.name') || "IWA-Express";
const apiUrl: string = config.get('App.apiConfig.url') || "http://localhost:3000/api-docs/";
const apiDesc: string = config.get('App.apiConfig.description') || "Development server"

const doc = {
    info: {
        title: `${appName} API`,
        version: '1.0.0',
        description:
            "This is the API for IWAExpress (Insecure Web App) Pharmacy Direct an insecure NodeJS/Express web application documented with Swagger",
        license: {
            name: "GPLv3",
            url: "https://www.gnu.org/licenses/gpl-3.0.en.html",
        },
        contact: {
            name: "Fortify by Opentext",
            url: "https://www.microfocus.com/en-us/cyberres/application-security",
        }
    },
    components: {
        schemas: {
            user: {
                $name: {
                    $first_name: "User",
                    $middle_name: "",
                    $last_name: "One"
                },
                $email: "user1@localhost.com",
                $phone_number: "1234567890",
                $password: "string",
                $address: {
                    $street: "string",
                    $city: "string",
                    $state: "string",
                    $zip: "string",
                    $country: "string",
                },
                $is_enabled: true,
                $password_reset: false,
                $mfa_enabled: false,
                $is_admin: false,
            },
            registerUser: {
                $first_name: "User",
                $last_name: "One",
                $email: "user1@localhost.com",
                $phone_number: "1234567890",
                $password: "string",
            },
            subscribeUser: {
                $first_name: "User",
                $last_name: "One",
                $email: "user1@localhost.com"
            },
            signInUser: {
                $email: "string",
                $password: "string"
            },
            signOutUser: {
                $accessToken: "string"
            },
            refreshUser: {
                $refreshToken: "string"
            },
            product: {
                $code: "SWA-123-456-789",
                $name: "Product Name",
                $summary: "An example summary.",
                $description: "This is an example description of the product.",
                $image: "image-filename",
                $price: 10.0,
                $on_sale: false,
                $sale_price: 10.0,
                $in_stock: true,
                $time_to_stock: 0,
                $rating: 1,
                $available: true
            },
            success: {
                $status: "success",
                $message: "string",
                $timestamp: "YYYY-MM-DDTHH:mm:ssZ",
                $data: {}
            },
            failure: {
                $status: "failure",
                $message: "string",
                $timestamp: "YYYY-MM-DDTHH:mm:ssZ",
                $data: {}
            }
        },
        securitySchemes: {
            basicAuth: {
                type: 'http',
                scheme: 'basic',
                description: 'Basic Authorization header.',
            },
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                description: 'JWT Authorization header.'
            }
        },
    },
    security: [
        {
            basicAuth: [],
            bearerAuth: [],
        },
    ],
    servers: [
        {
            url: `${apiUrl}`,
            description: `${apiDesc}`
        },
    ]
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['../routes/site.routes.ts', '../routes/user.routes.ts', '../routes/product.routes.ts'];

swaggerAutogen({openapi: '3.0.0'})(outputFile, endpointsFiles, doc);
