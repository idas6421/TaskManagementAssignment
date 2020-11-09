export interface Theme {
    name: string;
    properties: any;
}

export const base: Theme = {
    name: 'Blue',
    properties: {
        "--background-default": "#673ab7b0",
        "--background-secondary": "#673ab742",
        "--background-tertiary": "#e7ece8",
        "--background-light": "#ffffff",
        "--background-dialog": "#ffffff",
        "--foreground-hyperlink": "#0000ee"
    }
}

export const dark: Theme = {
    name: 'Green',
    properties: {
        "--background-default": "#23ab3b",
        "--background-secondary": "#3bffaf",
        "--background-tertiary": "#CEF9D6",
        "--background-light": "#80fd96",
        "--background-dialog": "#C8E6C9",
        "--foreground-hyperlink": "#558b2f"        
    }
}