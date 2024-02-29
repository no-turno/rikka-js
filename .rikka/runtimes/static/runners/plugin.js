export const plugin = () => {
    let server
    return {
        name: 'configure-server',
        configureServer(_server) {
            server = _server
        },
        transform(code, id) {
            if (server) {
                console.log(code, id);
            }
        },
    }
}