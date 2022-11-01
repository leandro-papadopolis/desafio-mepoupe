import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
      imports: [HttpModule],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('calculaMedia', () => {
    it('deve retornar corretamente objeto com a média de dois números com precisão de duas casas decimais', () => {
      expect(
        appController.calculaMedia({ arg1: '10', arg2: '21.95' }),
      ).toMatchObject({
        message: 'A média entre os números 10 e 21.95 é 15.98',
      });
    });
  });

  describe('consultaCep', () => {
    it('deve retornar objeto com as informações do cep enviado', async () => {
      expect(
        await appController.consultaCep({ cep: '72593114' }),
      ).toMatchObject({
        cep: '72593-114',
        logradouro: 'QRC 14',
        complemento: '',
        bairro: 'Residencial Santos Dumont (Santa Maria)',
        localidade: 'Brasília',
        uf: 'DF',
        ibge: '5300108',
        gia: '',
        ddd: '61',
        siafi: '9701',
      });
    });

    it('deve retornar exceção de bad request com cep inválido', () => {
      expect(appController.consultaCep({ cep: '5' })).rejects.toThrow(
        'Cep fornecido não é válido',
      );
    });

    it('deve retornar exceção de not found com cep sem bairro', () => {
      expect(appController.consultaCep({ cep: '18150000' })).rejects.toThrow(
        'Não foi possível encontrar o bairro deste CEP',
      );
    });
  });
});
