import React from 'react'

type GetChildPath = (additionalPath: string) => string

export interface FeatureRouterChild {
    path: string,
    getChildPath: GetChildPath
}

interface ResultRouteProp {path: string}

type InputComponent = React.JSXElementConstructor<FeatureRouterChild>

export const FeatureRouter = (Component: InputComponent) => ({path}: ResultRouteProp) => {
    const getChildPath: GetChildPath = aPath => path + aPath
    const componentProps: FeatureRouterChild = {getChildPath, path}

    return React.createElement<FeatureRouterChild>(Component, componentProps)
}

