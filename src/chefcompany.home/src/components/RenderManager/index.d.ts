interface ComponentsType {
    name: string;
    key: string;
    __editorItemTitle: string;
}
interface RenderManagerType {
    componentsToRender: ComponentsType[];
    componentsList: {
        key: string;
    }[];
    blockClass?: string;
}
declare const RenderManager: StorefrontFunctionComponent<RenderManagerType>;
export default RenderManager;
