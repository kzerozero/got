# Use bash instead of sh (for source compatibility)
SHELL := /bin/bash

# Variables for environment files
ENV_COMMON := .env
ENV_PROD := .env.production
ENV_STAGING := .env.staging

# Default build directory
BUILD_DIR := build

# Clean the old build directory
clean:
	@echo "Cleaning old build..."
	@rm -rf $(BUILD_DIR)

# Build for production
build-prod: clean
	@echo "Building for production..."
	@set -a && . $(ENV_COMMON) && . $(ENV_PROD) && npm run build && set +a
	@cp .htaccess $(BUILD_DIR)

# Build for staging
build-staging: clean
	@echo "Building for staging..."
	@set -a && . $(ENV_COMMON) && . $(ENV_STAGING) && npm run build && set +a
	@cp .htaccess $(BUILD_DIR)

# Default rule
build: build-prod