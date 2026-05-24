export class ExportConfiguration {
    static register(instances: any, gulpClass: any): void {
        for (const property in gulpClass) {
            const propertyName = property.toString();
            if (gulpClass.hasOwnProperty(propertyName)) {
                console.log(`Register "${propertyName}()" function`);
                instances[propertyName] = gulpClass[propertyName];
            }
        }
    }
}
