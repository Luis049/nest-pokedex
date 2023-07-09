import { IsInt, IsPositive, Min, MinLength, IsString  } from "class-validator";

export class CreatePokemonDto {


    // isInt, isPositive, min 1
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;

    // isString, minLength 1
    @IsString()
    @MinLength(1)
    name: string;

}
