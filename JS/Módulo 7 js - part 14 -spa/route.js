let routes = {};
export default function route(requisition, response){
    if (response){
        routes[requisition] = response;
        return;
    }else if(routes[requisition]){
        routes[requisition]();
        return;
    }
}

export {routes};