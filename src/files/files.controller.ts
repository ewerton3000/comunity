import { Controller, Post, UseInterceptors, UploadedFile, Req, Get, Param } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';

import { Request } from 'express';

@Controller('file')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('arquivo'))
 async  uploadArquivo(
    @UploadedFile() file: Express.Multer.File,
  ){
    return this.filesService.salvarDados(file)
  }

  @Get(':id')
  async getImage(@Param('id') id:number): Promise<string>{
    return await this.filesService.getImage(+id)
  }
  }

 