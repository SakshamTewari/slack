import { Workspace } from "../models/workspace.model";
import { randomUUID } from "crypto";

export class WorkspaceRepository {

    private readonly workspaces: Map<string, Workspace>;

    constructor() {
        this.workspaces = new Map();
    };

    // Create a new workspace
    async createWorkspace(name: string): Promise<Workspace>{

        const workspace: Workspace = {
            id: randomUUID(),
            name,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        this.workspaces.set(workspace.id, workspace);
        return workspace;
    };

    // Find all workspaces
    async findAllWorkspaces(): Promise<Workspace[]>{
        return [...this.workspaces.values()];
    };

    // Find by id
    async findWorkspaceById(id: string): Promise<Workspace | null> {
        return this.workspaces.get(id) ?? null;
    };

    // Update workspace
    async updateWorkspace(id: string, name: string): Promise<Workspace | null> {
        const workspace = this.workspaces.get(id);
        if (!workspace) return null;

        workspace.name = name;
        workspace.updatedAt = new Date();
        this.workspaces.set(id, workspace);
        return workspace;
    };

    // Delete workspace
    async deleteWorkspace(id: string): Promise<boolean> {
        return this.workspaces.delete(id);
    };
};