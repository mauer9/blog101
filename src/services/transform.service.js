export class TransformService {
    static fbObjToArr = fbObj => Object.keys(fbObj).map(key => {
            const item = fbObj[key]
            item.id = key
            return item
        })
    
}