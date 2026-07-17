export interface CreateWorkspaceRequest {
    name: string;
};

export interface UpdateWorkspaceRequest {
    name: string;
};

export interface WorkspaceParams {
    id: string;
};

export interface WorkspaceResponse {
    id: string;
    name: string;
    createdAt: Date;
};