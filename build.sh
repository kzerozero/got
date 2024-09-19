#!/bin/bash

# Clean old build
rm -rf build

# Load common environment variables
export $(cat .env | xargs)
# ehco $REACT_APP_BASENAME

# Choose the environment
if [ "$1" == "prod" ]; then
  echo "Building for production..."
  export $(cat .env.production | xargs)
elif [ "$1" == "staging" ]; then
  echo "Building for staging..."
  export $(cat .env.staging | xargs)
else
  echo "Unknown environment: $1"
  exit 1
fi

# Run the build with the combined environment variables
npm run build

# Copy .htaccess
cp .htaccess build/