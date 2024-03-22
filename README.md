# Custom error handling for when a serverless function has crashed

This example repo demonstrates the [custom error handling](https://docs.netlify.com/edge-functions/optional-configuration/#error-handling) options Netlify supports in [Edge Functions]().

## View the demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/d5a311d5-e084-4481-8b16-77737fbe08b0/deploy-status)](https://app.netlify.com/sites/example-edge-function-error-handling/deploys)

Visit https://example-edge-function-error-handling.netlify.app/ to browse this simple demo

## Clone and explore

By clicking the deploy button below, you can clone this example repo to explore it and try it locally, and also deploy it to Netlify to experiment with the different custom error handling options for Edge Functions.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/philhawksworth/example-edge-function-error-handling)

## Exploring what happens when an edge function has crashed

Browsing the example site, you can see the results of a number of custom error handling options available to you:

- **Unhandled error:** The edge function throws an error, and its error behavior is configured to `fail`. This is the default behavior if no custom error handling behavior is explicitly set. The generic error page is displayed to the user, and the error is entered into the error logs.
- **Custom path:** The edge functions throws an error which is entered into the error logs, but rather than displaying the generic 500 error page to the user, they are redirected to a path of our choosing within the site. This allows us to let them down gently with whatever experience we chose, while logging the error behind the scenes.
- **Silent bypass:** The edge function throws an error which is entered into the error logs, but it does not halt the progress of the request chain. If an asset was to be returned from this request, it will continue even though the function encountered an error.




## Prerequisites

- [A Netlify account](https://app.netlify.com/)
- [Netlify CLI](https://developers.netlify.com/cli/) (for local testing and development of Edge Functions)


## Local installation

1. Clone this repo (or click the button above to clone and deploy your copy in one step)

```bash 
git checkout https://github.com/philhawksworth/example-edge-function-error-handling


# or, if you cloned the site already via the Deploy button above
git checkout YOUR-REPO-URL
```

2. Move into your local project directory and install the dependencies

```bash
cd example-edge-function-custom-error-handling
npm i
```

3. Create a new Netlify site from the repo using Netlify CLI

```bash
# This step is not required if you created your clone by clicking the Deploy button above, 
# as a site will already have been created and linked to your new repo.
ntl init
```

4. Run your site locally with Netlify Dev to provide Edge Functions and other Netlify features locally

```bash
ntl dev
```

