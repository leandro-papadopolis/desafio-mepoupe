import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { catchError, firstValueFrom, map } from 'rxjs';
import { CalculaMediaRequestDto } from './dto/calcula-media.request.dto';
import { CalculaMediaResponseDto } from './dto/calcula-media.response.dto';
import { ConsultaCepResponseDto } from './dto/consulta-cep.response.dto';
import { consultaCepDto } from './dto/consulta-cep.dto';

@Injectable()
export class AppService {
  constructor(private readonly http: HttpService) {}

  calculaMedia(dto: CalculaMediaRequestDto): CalculaMediaResponseDto {
    return {
      message: `A média entre os números ${dto.arg1} e ${dto.arg2} é ${(
        Math.round(((10 + 21.95) / 2) * 100) / 100
      ).toFixed(2)}`,
    };
  }

  async consultaCep(param: consultaCepDto) {
    const { data } = await firstValueFrom(
      this.http
        .get<ConsultaCepResponseDto>(
          `https://viacep.com.br/ws/${param.cep}/json`,
        )
        .pipe(
          catchError(() => {
            throw new BadRequestException('Cep fornecido não é válido');
          }),
          map((res) => {
            if (res.data.bairro === '') {
              throw new NotFoundException(
                'Não foi possível encontrar o bairro deste CEP',
              );
            }
            return res;
          }),
        ),
    );
    return data;
  }
}
