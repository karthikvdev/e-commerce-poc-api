export const CONSTANT_MESSAGE = {
    STATUS: {
        SUCCESS: 'success',
        ERROR: 'error'
    },
    MESSAGE: {
        SOMETHING_WENT_WRONG: 'Something went wrong',
        SUCCESSFULLY_FETCHED: 'Successfully fetched',
    },
    PRODUCT: {
        CREATED: "Product created successfully.",
        UPDATED: "Product updated successfully.",
        DELETED: "Product deleted successfully",
        NOT_FOUND: "Product not found",
        GET: "Product fetched successfully"
    }
};

export const REGEX_PATTERNS = {
    FULL_URL: new RegExp(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/),
}
