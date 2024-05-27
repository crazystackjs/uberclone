/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { VideoService } from "../video.service";
import { VideoCreateInput } from "./VideoCreateInput";
import { Video } from "./Video";
import { VideoFindManyArgs } from "./VideoFindManyArgs";
import { VideoWhereUniqueInput } from "./VideoWhereUniqueInput";
import { VideoUpdateInput } from "./VideoUpdateInput";
import { SessionFindManyArgs } from "../../session/base/SessionFindManyArgs";
import { Session } from "../../session/base/Session";
import { SessionWhereUniqueInput } from "../../session/base/SessionWhereUniqueInput";
import { CommentDto } from "../CommentDto";
import { RatingDto } from "../RatingDto";
import { PopularVideoDto } from "../PopularVideoDto";
import { CategorySearchDto } from "../CategorySearchDto";
import { RecommendationDto } from "../RecommendationDto";

export class VideoControllerBase {
  constructor(protected readonly service: VideoService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Video })
  async createVideo(@common.Body() data: VideoCreateInput): Promise<Video> {
    return await this.service.createVideo({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        publishedAt: true,
        title: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Video] })
  @ApiNestedQuery(VideoFindManyArgs)
  async videos(@common.Req() request: Request): Promise<Video[]> {
    const args = plainToClass(VideoFindManyArgs, request.query);
    return this.service.videos({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        publishedAt: true,
        title: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Video })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async video(
    @common.Param() params: VideoWhereUniqueInput
  ): Promise<Video | null> {
    const result = await this.service.video({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        publishedAt: true,
        title: true,
        updatedAt: true,
        url: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Video })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVideo(
    @common.Param() params: VideoWhereUniqueInput,
    @common.Body() data: VideoUpdateInput
  ): Promise<Video | null> {
    try {
      return await this.service.updateVideo({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          publishedAt: true,
          title: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Video })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVideo(
    @common.Param() params: VideoWhereUniqueInput
  ): Promise<Video | null> {
    try {
      return await this.service.deleteVideo({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          publishedAt: true,
          title: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/sessions")
  @ApiNestedQuery(SessionFindManyArgs)
  async findSessions(
    @common.Req() request: Request,
    @common.Param() params: VideoWhereUniqueInput
  ): Promise<Session[]> {
    const query = plainToClass(SessionFindManyArgs, request.query);
    const results = await this.service.findSessions(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,

        video: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/sessions")
  async connectSessions(
    @common.Param() params: VideoWhereUniqueInput,
    @common.Body() body: SessionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessions: {
        connect: body,
      },
    };
    await this.service.updateVideo({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/sessions")
  async updateSessions(
    @common.Param() params: VideoWhereUniqueInput,
    @common.Body() body: SessionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessions: {
        set: body,
      },
    };
    await this.service.updateVideo({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/sessions")
  async disconnectSessions(
    @common.Param() params: VideoWhereUniqueInput,
    @common.Body() body: SessionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sessions: {
        disconnect: body,
      },
    };
    await this.service.updateVideo({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Post("/comentar-video")
  @swagger.ApiOkResponse({
    type: CommentDto,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async AdicionarComentarios(
    @common.Body()
    body: string
  ): Promise<CommentDto> {
    return this.service.AdicionarComentarios(body);
  }

  @common.Get("/:id/adicionar-coment-rios")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async AdicionarComentRios(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.AdicionarComentRios(body);
  }

  @common.Post("/avaliar-video")
  @swagger.ApiOkResponse({
    type: RatingDto,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async AvaliarVideos(
    @common.Body()
    body: string
  ): Promise<RatingDto> {
    return this.service.AvaliarVideos(body);
  }

  @common.Get("/:id/avaliar-v-deos")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async AvaliarVDeos(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.AvaliarVDeos(body);
  }

  @common.Get("/videos-populares")
  @swagger.ApiOkResponse({
    type: PopularVideoDto,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ListarVideosPopulares(
    @common.Body()
    body: string
  ): Promise<PopularVideoDto[]> {
    return this.service.ListarVideosPopulares(body);
  }

  @common.Get("/:id/listar-v-deos-populares")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ListarVDeosPopulares(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.ListarVDeosPopulares(body);
  }

  @common.Get("/pesquisar-videos")
  @swagger.ApiOkResponse({
    type: CategorySearchDto,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async PesquisarVideosPorCategoria(
    @common.Body()
    body: string
  ): Promise<CategorySearchDto[]> {
    return this.service.PesquisarVideosPorCategoria(body);
  }

  @common.Get("/:id/pesquisar-v-deos-por-categoria")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async PesquisarVDeosPorCategoria(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.PesquisarVDeosPorCategoria(body);
  }

  @common.Get("/recomendar-videos")
  @swagger.ApiOkResponse({
    type: RecommendationDto,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async RecomendarVideos(
    @common.Body()
    body: string
  ): Promise<RecommendationDto[]> {
    return this.service.RecomendarVideos(body);
  }

  @common.Get("/:id/recomendar-v-deos")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async RecomendarVDeos(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.RecomendarVDeos(body);
  }
}