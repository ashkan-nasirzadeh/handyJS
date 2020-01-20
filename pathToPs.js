var hf = {
    pathToPs: function (path, separator = 'byOs') {
        // console.log(typeof separator);
        if (separator == 'byOs') {
            let platform = os.platform();
            if (platform == 'win32') directory_separator = '\\';
            else directory_separator = '/';
            separator = directory_separator;
        }
        let splited_1 = path.split(separator);
        let forReturn = '';
        let here = this;
        // return splited_1;
        splited_1.forEach(function (v, i) {
            if (v.search(':') == -1 && i !== 0 && !here.checkforQExists(v)) {
                splited_1[i] = '"' + v + '"';
            }
        });
        splited_1.forEach((item, i) => {
            if (i+1 != splited_1.length) {
                forReturn += item + '\\';
            } else {
                forReturn += item
            }
        });
        console.log(forReturn);
        return forReturn;
    },
    checkforQExists: function (str) {
        let toReturn = false;
        let length = str.length;
        let f_l = str.slice(0, 1);
        let l_l = str.slice(length-1, length);
        if (f_l == '"' && l_l == '"') {
            toReturn = true;
        }
        return toReturn;
    }
}
