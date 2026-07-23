import { randomUUID } from "crypto";
import { Workspace } from '../models/workspace.model';
import { WorkspaceRepository } from '../repositories/workspace.repository';
import { CreateWorkspaceRequest, UpdateWorkspaceRequest } from "../types/workspace";

export class WorkspaceService {
    constructor(private readonly workspaceRepository: WorkspaceRepository) {}

    // Create a new workspace
    async createWorkspace(request: CreateWorkspaceRequest): Promise<Workspace>{

         const workspace: Workspace = {
            id: randomUUID(),
            name: request.name,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        return this.workspaceRepository.createWorkspace(workspace);
    };

    // Update Workspace
    async updateWorkspace(id: string, request: UpdateWorkspaceRequest): Promise<Workspace | null>{
        const workspace = await this.workspaceRepository.findWorkspaceById(id);

        if(!workspace) return null;

        workspace.name = request.name;
        workspace.updatedAt = new Date();

        return this.workspaceRepository.updateWorkspace(workspace);
    };

    // Get all Workspaces
    async getAllWorkspaces(): Promise<Workspace[]>{
        return this.workspaceRepository.findAllWorkspaces();
    }

    // Get Workspace by id
    async getWorkspaceById(id: string): Promise<Workspace | null>{
        return this.workspaceRepository.findWorkspaceById(id);
    }

    // Delete Workspace
    async deleteWorkspace(id: string): Promise<boolean>{
        return this.workspaceRepository.deleteWorkspace(id);
    }
}