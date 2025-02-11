# Next.js 15: useRouter.push with query parameters issue

This repository demonstrates a bug encountered when using the `useRouter.push` method in Next.js 15 to navigate to a page with query parameters.  The issue manifests as an unexpected behavior or error when the navigation occurs.

## Bug Description

The navigation to a page with query parameters using `router.push` does not work as expected.  This might manifest as the page not rendering correctly, displaying an error, or failing to update the URL correctly.

## Reproduction Steps

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to the `/about` page.
5. Click the button to navigate to the home page with query parameters.
6. Observe that the page navigation may not work correctly.

## Solution

The solution addresses the issue by ensuring the query parameters are properly handled during navigation.

## Technologies Used

* Next.js 15
* React

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you encounter any problems or have suggestions for improvements.