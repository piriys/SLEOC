﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SLEOC.Models
{
    public class CardListModel : Card
    {
        public List<string> ListItems { get; set; }

        public CardListModel()
        {
            string[] listItemsArray = { "&lt;span class=&quot;white&quot;&gt;One&lt;/span&gt;", 
                                          "&lt;span class=&quot;gray&quot;&gt;Two&lt;/span&gt;", 
                                          "&lt;span class=&quot;blue&quot;&gt;Three&lt;/span&gt;",
                                          "&lt;span class=&quot;red&quot;&gt;Four&lt;/span&gt;",
                                          "&lt;span class=&quot;green&quot;&gt;Five&lt;/span&gt;",
                                          "&lt;span class=&quot;yellow&quot;&gt;Six&lt;/span&gt;"
                                      };
            ListItems = new List<string>(listItemsArray).ToList();
        }
    }
}