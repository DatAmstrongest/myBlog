import { Request, Response, NextFunction } from 'express'

// Create a blog
export const createBlog = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(201).json({"Message": "Success"});
    } catch (error) {
        next(error);
    }

}

// Read all blogs
export const getBlogs = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json({"Message": "Success"});
    } catch (error) {
        next(error);
    }
}

export const getBlogById = (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        res.json({"Message": "Success", "Id": id});
    } catch (error) {
        next(error)
    } 
}

export const updateBlog = (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id as string, 10);
    res.json({"Message": "Success", "Id": id});
}

export const deleteBlog = (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id as string, 10);
    res.json({"Message": "Success", "Id": id});
}