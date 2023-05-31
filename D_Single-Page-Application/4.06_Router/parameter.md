# useNavigate || redirect

- sind Hooks die mit react-router-dom installiert werden
- müssen importiert werden 
- man verwendet redirect oder useNavigate um zu anderen Seiten/Routes zu gelangen

`import { redirect } from "react-router-dom";`







# Parameter in URLs

Kaum eine Anwendung kommt ohne URLs aus, die Parameter enthält. Man verwendundet dafür einen Parameter-Namen mit vorangestelltem Doppelpunkt (:).

`<Route path="/users/:userid" component={UserProfile} />`

## Zuriff auf diese Parameter

