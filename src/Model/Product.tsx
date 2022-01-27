import { NumberLiteralType } from "typescript";
import Rating from "./Rating";

export default interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}