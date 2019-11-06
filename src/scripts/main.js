console.log("this is working!")

import apiCalls from "./apiCalls"
import DOMComponents from "./DOMComponents"
apiCalls.getAllObjects()
.then(response => DOMComponents.buildCardHtml(response))
