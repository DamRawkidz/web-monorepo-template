import { SeItem } from "../../core/data/type"


export const filterPermissionMenu = (routes: SeItem[], currentUser: any): any[] => {
  const defaultArray = routes
    .filter(route => {
      if (!route?.skipCondition) {
        return route
      }

      return routes
    })
    .map(route => {

      const haveRole = selectRoute(currentUser, route)
      if (haveRole) {
        if (route.children) {

          const data = route?.children.filter((childrenRoute: any) => selectRoute(currentUser, childrenRoute))

          const filterChildenRouter = {
            ...route,
            children: [...data.map((data: any) => modifyRoute(currentUser, data))].reduce((a, b) => {
              if (Array.isArray(a) && Array.isArray(b)) return a.concat(b)
              return [...a, b]
            }, [])
          }

          return filterChildenRouter
        }
        return route
      }

      return { id: null }
      // if (!haveRole) return { id: null }

    })
  return defaultArray
}

const selectRoute = (currentUser: any, route: any) => {
  return currentUser?.rights.some((per: any) => route?.role?.includes(per.obj))
}

const modifyRoute = (currentUser: any, route: any) => {
  if (!route.children) return [route]
  const data = route.children.filter((childrenRoute: any) => selectRoute(currentUser, childrenRoute))

  const mapRoute = data.map((r: any) => {
    return {
      ...r,
      children: modifyRoute(currentUser, r)
    }
  })

  route.children = mapRoute
  return route
}





export const nestedFind = (routes: any, _link: any) => {
  const currentRoutes = routes?.find((r: any) => {
    const match = r?.link == _link
    if (!match && r.children) return nestedFind(r?.children, _link)
    if (match) return r
  })

  return currentRoutes
}

export const updateMenu = (_routes: any, title: string, _link: string) => {
  const mapMenu = _routes?.map((r: any) => {
    if (r.title == title) {
      r.ischildActive = true
      r.children = updateCollapeRoutes(r.children, true, _link)
      return r
    } else {
      r.ischildActive = false
      r.children = updateCollapeRoutes(r.children, false, _link)
      return r
    }
  })

  return mapMenu
}

const updateCollapeRoutes = (routes: SeItem[], isChildActive: boolean, _link: string) => {
  const mapActiveRoute: any = routes.map((r: any) => {

    if (r.type == 'collapsable') {
      return {
        ...r,
        ischildActive: isChildActive ? hasUrlInChild(r.children, _link) : false,
        children: updateCollapeRoutes(r.children, isChildActive, _link)
      }
    }

    return r

  })
  return mapActiveRoute
}

const hasUrlInChild = (routes: SeItem[], _link: string): any => {
  return routes.some((r: any) => {
    const hasChild = r.link == _link
    if (!hasChild && r.children) {
      return hasUrlInChild(r.children, _link)
    }

    return hasChild
  })
}
