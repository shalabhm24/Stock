module StockBLC

open System
open FSharp.Data

type Stock = 
    {
        Date : string
        Open : string
        High : string
        Low : string
        Close : string
        AdjClose : string
        Volume : string
    }

let StockDef = {
                Date = ""
                Open = ""
                High = ""
                Low = ""
                Close = ""
                AdjClose = ""
                Volume = ""
                }
type Stocks = CsvProvider<"D:\Stock\Stock\Data\stock.csv">

let msft = Stocks.Load("D:\Stock\Stock\Data\stock.csv").Cache()
let row = msft.Rows
let stockList = row
                |>Seq.map(fun x-> 
                                       {
                                            StockDef with 
                                                Date = x.Date.ToString()
                                                Open = x.Open.ToString() 
                                                High=x.High.ToString()
                                                Low= x.Low.ToString()
                                                Close = x.Close.ToString()
                                                AdjClose= x.``Adj Close``.ToString()
                                                Volume= x.Volume.ToString()
                                          }
                              )
                    |>Seq.toList

