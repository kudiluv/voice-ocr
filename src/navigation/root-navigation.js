import { createRef } from "react";

const navigationRef = createRef();
const getCurrentRoute = () => {
    return navigationRef.current?.getCurrentRoute().name;
}
const navigate = (route) => {
    navigationRef.current?.navigate(route);
}

export {
    navigationRef,
    getCurrentRoute,
    navigate
}