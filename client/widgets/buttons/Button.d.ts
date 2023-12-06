import Link from "../main/Link";
declare class Button extends Link {
    constructor(selectedOptions: string | Record<string, any>, otheroptions?: Record<string, any> | null);
}
export default Button;
