import Component from './component.js'
import './firstSection.css'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import AppsIcon from '@material-ui/icons/Apps';
import PowerIcon from '@material-ui/icons/Power';
import ExtensionIcon from '@material-ui/icons/Extension';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
function FirstSection(){
    let comp = [{
        icon: <PlayCircleFilledIcon fontSize='large'/>,
        head: 'Continuous Integration and Continuous Delivery',
        para: 'As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.'
    },
    {
        icon: <CloudDownloadIcon fontSize='large'/>,
        head: 'Easy installation',
        para: 'Jenkins is a self-contained Java-based program, ready to run out-of-the-box, with packages for Windows, Linux, macOS and other Unix-like operating systems.'  
    },
    {
        icon: <AppsIcon fontSize='large'/>,
        head: 'Easy configuration',
        para: 'Jenkins can be easily set up and configured via its web interface, which includes on-the-fly error checks and built-in help.'  
    },
    {
        icon: <PowerIcon fontSize='large'/>,
        head: 'Plugins',
        para: 'With hundreds of plugins in the Update Center, Jenkins integrates with practically every tool in the continuous integration and continuous delivery toolchain.'  
    },
    {
        icon: <ExtensionIcon fontSize='large'/>,
        head: 'Extensible',
        para: 'Jenkins can be extended via its plugin architecture, providing nearly infinite possibilities for what Jenkins can do.'  
    },
    {
        icon: <AddToQueueIcon fontSize='large'/>,
        head: 'Distributed',
        para: 'Jenkins can easily distribute work across multiple machines, helping drive builds, tests and deployments across multiple platforms faster.'  
    },
]
        return(
            <div className='firstSection'>
            <div className='comp1'>
        <Component data={comp[0]}/>
        </div>
        <div className='comp2'>
        <Component data={comp[1]}/>
        </div>
        <div className='comp3'>
        <Component data={comp[2]}/>
        </div>
        <div className='comp4'>
        <Component data={comp[3]}/>
        </div>
        <div className='comp5'>
        <Component data={comp[4]}/>
        </div>
        <div className='comp6'>
        <Component data={comp[5]}/>
        </div>
        </div>
    );
}
export default FirstSection;