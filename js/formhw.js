function billingFunction()
{
  if (document.getElementById('same').checked)
    {
      var x=document.getElementById('shippingName').value;
      var y=document.getElementById('shippingZip').value;
      document.getElementById('billingName').value=x;
      document.getElementById('billingZip').value=y;
      
    }
    else
    {
        document.getElementById('billingName').value="";
      document.getElementById('billingZip').value="";

    }
}