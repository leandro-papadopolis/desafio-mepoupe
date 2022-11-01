import { IsNumberString, IsNotEmpty } from 'class-validator';

export class consultaCepDto {
  @IsNumberString({}, { message: 'parâmetro $property precisa ser um número' })
  @IsNotEmpty({ message: 'parâmetro $property é necessário' })
  readonly cep: string;
}
