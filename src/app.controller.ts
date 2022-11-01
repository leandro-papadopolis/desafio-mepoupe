import { Query, Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { CalculaMediaRequestDto } from './dto/calcula-media.request.dto';
import { CalculaMediaResponseDto } from './dto/calcula-media.response.dto';
import { ConsultaCepResponseDto } from './dto/consulta-cep.response.dto';
import { consultaCepDto } from './dto/consulta-cep.dto';
import { LoggerMiddleware } from './middleware/logger.middleware';

@UseInterceptors(LoggerMiddleware)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('calcula-media')
  calculaMedia(@Query() dto: CalculaMediaRequestDto): CalculaMediaResponseDto {
    return this.appService.calculaMedia(dto);
  }

  @Get('consulta-cep/:cep')
  consultaCep(@Param() cep: consultaCepDto): Promise<ConsultaCepResponseDto> {
    return this.appService.consultaCep(cep);
  }
}
