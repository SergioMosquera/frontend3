
   function Auction_PopupWindow(thispage, name, params) {
   if (name == null) { name = "pop"; }
    thiswindow = window.open(thispage,'psw_'+name,params);
   }
     
   function $(idElem) {
   return document.getElementById(idElem);
   }
   
      var funcs = {
       t : null,
       openDiv : function(repDiv, divPrefix) {
          if ($(divPrefix+repDiv).style.display == 'block') {
             $(divPrefix+repDiv).style.display = 'none';
             $('arrow_R_'+repDiv).src="/smsweb/20200501/images/auction/arrow_rightG.gif";
          } else {
             $('arrow_R_'+repDiv).src=src="/smsweb/20200501/images/auction/arrow_downG.gif";
             $(divPrefix+repDiv).style.display = 'block';
          }
       }
    }
   
   function Auction_PopupWindow(thispage, name, params) {if (name == null) { name = "pop"; } thiswindow = window.open(thispage,'psw_'+name,params);}
   
   
   //*********** USER CALL STATUS FUNCTIONS
   function message_broadcast(message) {
       localStorage.setItem('message',JSON.stringify(message));
       localStorage.removeItem('message');
   }
   
   function setUnavailableStatusOff(userId) {
      new Ajax.Request('/sms/internal/user/unavailableStatus/setOff?userId='+userId, 
         {
            method: "get",
            asynchronous: false,
            onSuccess: function(transport) {
               var result = transport.responseText.evalJSON();
               setUnavailableStatusDone(result);
            },
            onFailure: function(transport) { 
               alert("An error ocurred trying to set the status, please try again");
            }
         });
   }
   
   function setUnavailableStatusOn(userId) {
      new Ajax.Request('/sms/internal/user/unavailableStatus/setOn?userId='+userId, 
         {
            method: "get",
            asynchronous: false,
            onSuccess: function(transport) {
               var result = transport.responseText.evalJSON();
               setUnavailableStatusDone(result);
            },
            onFailure: function(transport) { 
               alert("An error ocurred trying to set the status, please try again");
            }
         });
   }
   
   function setUnavailableStatusDone(result) {
      if (result.response.statusCode == "found"){
         if (result.unavailableStatus) {
            message_broadcast({'unavailableStatus': result.unavailableStatus});
            changeUserStatus(result.unavailableStatus);
         }
      } else {
         if (result.INVALID_USER) {
            alert('You are trying to set up the status for an invalid user.');
         }
      }
   }
   
   //var canProceedAfterStatusVerifycation = false;
   //var mustValidateUnavailableStatus = true;
   
   function verifyUnavailableStatus(callerUserId) {
         return true;
   }
   
   function verifyUnavailableStatusBeforeAction(params, userId, showSkippedCallsModal) {
         afterValidationRequest(params, showSkippedCallsModal);
   }
   
   function isUserAvailable(callerUserId) {
         return true;
   }
   
   
   function afterValidationRequest(params, showSkippedCallsModal) {
      if(showSkippedCallsModal) {
         showSkippedCalls();
      }
      $("openCalls").action = params;
      $("openCalls").submit();
   }
   
   
   //Bootstrap
   
   function verifyUnavailableStatusV2(callerUserId) {
         return true;
   }
   
   function setUnavailableStatusOnV2(userId) {
      $.ajax({
           url: '/sms/internal/user/unavailableStatus/setOn',
           type: 'GET',
           data: {userId: userId},
           dataType: 'json',
           async:false,
           success: function(result) {
                  setUnavailableStatusDone(result);	
           },
         error: function(jqxhr, status, errorMsg)
         {
            alert("An error ocurred trying to set the status, please try again");
         }			
      });
   }
   
   function setUnavailableStatusOffV2(userId) {
         $.ajax({
           url: '/sms/internal/user/unavailableStatus/setOff',
           type: 'GET',
           data: {userId: userId},
           dataType: 'json',
           async:false,
           success: function(result) {
                  setUnavailableStatusDone(result);	
           },
         error: function(jqxhr, status, errorMsg)
         {
            alert("An error ocurred trying to set the status, please try again");
         }			
      });
   }
   
   //*********** Skipped calls functions
   var intervalId = null;
   
   function  showSkippedCalls() {
      var iframe = parent.document.getElementById('geninfo');
      var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
      var modal = innerDoc.getElementById('skippedModal');
   
      modal.style.display = "block";
      clearInterval(intervalId); // stops a previous interval if exist
      intervalId = setInterval(refreshSkippedCalls, 3000);
   }
   
   function refreshSkippedCalls() {
       new Ajax.Request('/sms/internal/call/getSkippedCalls', {
         method: "get",
         parameters: {},
         onSuccess: 	function(ajaxResponse) {
            var json = ajaxResponse.responseText.evalJSON();
            
            if(json.stopRefreshing) {
               clearInterval(intervalId); // stop the interval
            }else {
               
               var iframe = parent.document.getElementById('geninfo');
               var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
               skippedCallsDiv = innerDoc.getElementById('skippedCallsDiv');
               
               skippedCallsDiv.innerHTML = json.skippedCalls;
            }
            
            return false;
         }
      });
   }
