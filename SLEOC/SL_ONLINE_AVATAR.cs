//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SLEOC
{
    using System;
    using System.Collections.Generic;
    
    public partial class SL_ONLINE_AVATAR
    {
        public int OnlineAvatarID { get; set; }
        public bool OnlineAvatarIsActive { get; set; }
        public Nullable<System.DateTime> OnlineAvatarTimeStamp { get; set; }
    
        public virtual SL_AVATAR SL_AVATAR { get; set; }
        public virtual SL_LOCATION SL_LOCATION { get; set; }
    }
}
