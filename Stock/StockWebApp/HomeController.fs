namespace FsWeb.Controllers

open System.Web
open System.Web.Mvc
open StockBLC
[<HandleError>]
type HomeController() =
    inherit Controller()
    member this.Index () =
        this.View() :> ActionResult
    member this.GetData() = 
        let stckList = stockList
        this.Json(stckList, JsonRequestBehavior.AllowGet) :> ActionResult 
