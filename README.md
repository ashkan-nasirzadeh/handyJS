### hf.pathToPs(path, separator)

no more worry about working with PowerShell from node child_process. e.g. :

```javascript
let path = hf.pathToPs('C:/Users/ashkan nasirzadeh/check.ps1', '/');
//path: C:\"Users"\"ashkan nasirzadeh"\"check.ps1"
child = spawn("powershell.exe",[path]);
```