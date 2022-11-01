import { IsNumber } from 'class-validator';

export class CalculaMediaResponseDto {
  @IsNumber()
  readonly message: string;
}
