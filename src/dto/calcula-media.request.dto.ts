import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CalculaMediaRequestDto {
  @IsNumberString({}, { message: 'parâmetro $property precisa ser um número' })
  @IsNotEmpty({ message: 'parâmetro $property é necessário' })
  readonly arg1: string;

  @IsNumberString({}, { message: 'parâmetro $property precisa ser um número' })
  @IsNotEmpty({ message: 'parâmetro $property é necessário' })
  readonly arg2: string;
}
