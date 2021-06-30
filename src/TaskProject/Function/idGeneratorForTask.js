export function* idGeneratorTask(){
        let index=0;
        while(true)
            yield index++;
}
