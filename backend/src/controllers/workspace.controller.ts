import { FastifyReply, FastifyRequest } from "fastify";
import { WorkspaceService } from "../services/workspace.service";
import { CreateWorkspaceRequest, UpdateWorkspaceRequest, WorkspaceParams } from "../types/workspace";

export class WorkspaceController {

    constructor(private readonly workspaceService: WorkspaceService){}

    // Create workspace
    async createWorkspace(request: FastifyRequest<{Body: CreateWorkspaceRequest}>, reply: FastifyReply){
        const workspace = await this.workspaceService.createWorkspace(request.body);
        return reply.code(201).send(workspace);
    };

    // Update workspace
    async updateWorkspace(request: FastifyRequest<{Params: WorkspaceParams,Body: CreateWorkspaceRequest}>, reply: FastifyReply){
        const workspace = await this.workspaceService.updateWorkspace(request.params.id, request.body);
        return reply.code(201).send(workspace);
    };

    // Get all workspaces
    async getAllWorkspaces(request: FastifyRequest, reply: FastifyReply){
        const workspaces = await this.workspaceService.getAllWorkspaces();
        return reply.code(201).send(workspaces);
    };

    // Get workspace by ID
    async getWorkspaceById(request: FastifyRequest<{Params: WorkspaceParams}>, reply: FastifyReply){
        const workspace = await this.workspaceService.getWorkspaceById(request.params.id);
        
        if(!workspace){
            return reply.code(404).send({
                message: "Workspace not found!",
            });
        }
        return reply.code(201).send(workspace);
    };

    // Delete workspace
    async deleteWorkspace(request: FastifyRequest<{Params: WorkspaceParams}>, reply: FastifyReply){
        const deletedWorkspace = await this.workspaceService.deleteWorkspace(request.params.id);
        if(!deletedWorkspace){
            return reply.code(404).send({
                message: "Workspace not found!",
            });
        }

        return reply.code(204).send();
    };
}