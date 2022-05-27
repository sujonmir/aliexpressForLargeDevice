$(document).ready(function () {
    let allBtn = [".myCollapseBtn1",".myCollapseBtn2",".myCollapseBtn3",".myCollapseBtn4",".myCollapseBtn5",".myCollapseBtn6",".myCollapseBtn7",".myCollapseBtn8",".myCollapseBtn9",".myCollapseBtn10",".myCollapseBtn11"];
    let allIcon = [".icont1",".icont2",".icont3",".icont4",".icont5",".icont6",".icont7",".icont8",".icont9",".icont10",".icont11"];
    let clickBtn = {
        //Tab btn for Coupon & Promotion
        coin_tab: $("#coins-tab"),
        coupon_tab: $("#coupon-tab"),
        freebies_tab: $("#freebies-tab"),
        campaingn_tab: $("#campaingn-tab"),
        //Tab btn for account management
        registration_tab: $("#registration-tab"),
        account_tab: $("#account-tab"),
        aliexpress_tab: $("#aliexpress-tab"),
        find_tab: $("#find-tab"),
        unavailable_tab: $("#unavailable-tab"),
        alipay_tab: $("#alipay-tab"),
        data_subject_tab: $("#data_subject-tab"),
        //Tab btn for product selection
        searching_tab: $("#searching-tab"),
        shopping_tab: $("#shopping-tab"),
        //Tab btn for payment & order management
        ordering_tab: $("#ordering-tab"),
        payment_tab: $("#payment-tab"),
        order_management_tab: $("#order_management-tab"),
        //Tab btn for awaiting order arraival
        wait_for_seller_tab: $("#wait_for_seller-tab"),
        report_not_receiving_tab: $("#report_not_receiving-tab"),
        //Tab btn for aftersales
        report_product_issue_tab: $("#report_product_issue-tab"),
        free_return_tab: $("#free_return-tab"),
        warranty_tab: $("#warranty-tab"),
        //Tab btn for refund
        refund_process_tab: $("#refund_process-tab"),
        not_received_refund_tab: $("#not_received_refund-tab"),
        received_the_less_tab: $("#received_the_less-tab"),
        //Tab btn for feedback
        our_feedback_tab: $("#our_feedback-tab"),
        //Tab btn for rule & policy
        aliexpress_rules_tab: $('#aliexpress_rules-tab'),
        ipr_tab: $('#ipr-tab'),
        //Tab btn for communication
        message_center_tab: $('#message_center-tab'),
        //Tab btn for other
        aliexpress_introduce_tab: $('#aliexpress_introduce-tab'),
        other_tab: $('#other-tab')
    };
    for (let i in clickBtn) {
       clickBtn[i].click(function() {
          allTabContentBtn(allBtn[0]);
          allTabContentBtn(allBtn[1]);
          allTabContentBtn(allBtn[2]);
          allTabContentBtn(allBtn[3]);
          allTabContentBtn(allBtn[4]);
          allTabContentBtn(allBtn[5]);
          allTabContentBtn(allBtn[6]);
          allTabContentBtn(allBtn[7]);
          allTabContentBtn(allBtn[8]);
          allTabContentBtn(allBtn[9]);
          allTabContentBtn(allBtn[10]);
       });
    }
//===reuseable function==//
    function addRemove() {
      $(".current_page_links").show();
      $(".fiar_faq_current .fiar_faq_next").hide();
    }
    function addRemoveReverse() {
      $(".current_page_links").hide();
      $(".fiar_faq_current .fiar_faq_next").show();
    }
    function bothRemove(a,b) {
      $(a).hide();
      $(b).hide();
    }
    function attrDisable(a,b) {
      $(a).removeClass("disabled");
      $(b).attr("aria-disabled","false");
    }
    function attrEnable(a,b) {
      $(a).addClass("disabled");
      $(b).attr("aria-disabled","true");
    }
    function tabFuncAdd(a) {
       $(a).addClass('active');
    }
    function tabFuncRemove(a) {
       $(a).removeClass('active');
    }
    function paginationEvent() {
        $("[id='page_num1']").click(function() {
            addRemove();
            attrEnable("#fiar_page_index","#fiar_page_index > a");
            $(".fiar_faq_current .fiar_faq_third_page").hide();
        });
        $("#fiar_left_arrow").click(function() {
            addRemove();
            attrDisable("#fiar_page_index","#fiar_page_index > a");
            $(".fiar_faq_current .fiar_faq_third_page").hide();
        });
    }
    function removeAll() {
        tabFuncRemove('.fiar_coins');
        tabFuncRemove('.fiar_coupon');
        tabFuncRemove('.fiar_freebies');
        tabFuncRemove('.fiar_campaingn');
        tabFuncRemove('.fiar_registration');
        tabFuncRemove('.fiar_account');
        tabFuncRemove('.fiar_aliexpress');
        tabFuncRemove('.fiar_find');
        tabFuncRemove('.fiar_unavailable');
        tabFuncRemove('.fiar_alipay');
        tabFuncRemove('.fiar_data_subject');
        tabFuncRemove('.fiar_searching');
        tabFuncRemove('.fiar_shopping');
        tabFuncRemove('.fiar_ordering');
        tabFuncRemove('.fiar_payment');
        tabFuncRemove('.fiar_order_management ');
        tabFuncRemove('.fiar_wait_for_seller');
        tabFuncRemove('.fiar_report_not_receiving');
        tabFuncRemove('.fiar_report_product_issue');
        tabFuncRemove('.fiar_free_return');
        tabFuncRemove('.fiar_warranty');
        tabFuncRemove('.fiar_refund_process');
        tabFuncRemove('.fiar_not_received_refund');
        tabFuncRemove('.fiar_received_the_less');
        tabFuncRemove('.fiar_our_feedback');
        tabFuncRemove('.fiar_aliexpress_rules');
        tabFuncRemove('.fiar_ipr');
        tabFuncRemove('.fiar_message_center');
        tabFuncRemove('.fiar_aliexpress_introduce');
        tabFuncRemove('.fiar_other');
    }
    function allTabContentBtn(a) {
         $(a).click(function() {
            addRemove();
            removeAll();
        });
    }
//====change icon and set style d-block and d-none between fiar_main_category and tab details======/
    console.table(allBtn);
    for (let i = 0; i <= allBtn.length; i++) {
        $(allBtn[i]).click(function() {
            $(allIcon[i]).toggleClass("fa-angle-down fa-angle-up");
            $(".fiar_main_category").hide();
            $("#tab_details").show();
            $(".fiar_faq_current").hide(); 
            attrEnable("#fiar_page_third_index","#fiar_page_third_index > a");
        });
    }  //for loop end
        //coins & coupon
        $(allBtn[0]).click(function() {
           $('#current_page').show();
           $(".fiar_faq_current .fiar_faq_next").hide();
           attrDisable("#fiar_page_second_index","#fiar_page_second_index > a");
           /*bothRemove("#account_management_page", "#product_selection_page");
           bothRemove("#ordering_payment_page", "#awaiting_order_arrival_page");
           bothRemove("#aftersales_page", "#refund_page");
           bothRemove("#feedback_page", "#rules_policy_page");
           bothRemove("#communication_page", "#other_page");*/
           removeAll();
        });
         $("[id='page_num2']").click(function() {
            addRemoveReverse();
            attrDisable("#fiar_page_index","#fiar_page_index > a");
            paginationEvent();
            $(".fiar_faq_current .fiar_faq_third_page").hide();
            $(allBtn[0]).click(function() {
               addRemove();
            });  
        });
        //account management 
        $(allBtn[1]).click(function() {
            $("#account_management_page").show();
            $(".fiar_faq_current .fiar_faq_next").hide();
            attrDisable("#fiar_page_second_index","#fiar_page_second_index > a");
            removeAll();
        });
        //product selection
        $(allBtn[2]).click(function() {
           $("#product_selection_page").show();
           attrEnable("#fiar_page_second_index","#fiar_page_second_index > a");
            removeAll();
        });
        //ordering & payment
        $(allBtn[3]).click(function() {
           $("#ordering_payment_page").show();
           $(".fiar_faq_current .fiar_faq_next").hide();
           $(".fiar_faq_current .fiar_faq_third_page").hide();
           attrDisable("#fiar_page_second_index","#fiar_page_second_index > a");
           attrDisable("#fiar_page_third_index","#fiar_page_third_index > a");
            removeAll();
            $("[id='page_num3']").click(function() {
                attrDisable("#fiar_page_index","#fiar_page_index > a");
                paginationEvent();
                bothRemove(".current_page_links",".fiar_faq_current .fiar_faq_next");
               $(".fiar_faq_current .fiar_faq_third_page").show();
            });
        });
        //awating order arrival
        $(allBtn[4]).click(function() {
           $("#awaiting_order_arrival_page").show();
           attrEnable("#fiar_page_second_index","#fiar_page_second_index > a");
            removeAll();
        });
        //aftersales
        $(allBtn[5]).click(function() {
           $("#aftersales_page").show();
           attrDisable("#fiar_page_second_index","#fiar_page_second_index > a");
            removeAll();
        });
        //refund
        $(allBtn[6]).click(function() {
           $("#refund_page").show();
           attrEnable("#fiar_page_second_index","#fiar_page_second_index > a");
            removeAll();
        });
        //feedback
        $(allBtn[7]).click(function() {
           $("#feedback_page").show();
           attrEnable("#fiar_page_second_index","#fiar_page_second_index > a");
            removeAll();
        });
        //rules & policy
        $(allBtn[8]).click(function() {
           $("#rules_policy_page").show();
           $(".fiar_faq_current .fiar_faq_next").hide();
           attrDisable("#fiar_page_second_index","#fiar_page_second_index > a");
            removeAll();
        });
        //communication
        $(allBtn[9]).click(function() {
           $("#communication_page").show();
           $(".fiar_faq_current .fiar_faq_next").hide();
           attrEnable("#fiar_page_second_index","#fiar_page_second_index > a");
           removeAll();
        });
        //other
        $(allBtn[10]).click(function() {
           $("#other_page").show();
           $(".fiar_faq_current .fiar_faq_next").hide();
           attrEnable("#fiar_page_second_index","#fiar_page_second_index > a");
           removeAll();
        });
    //when nav-item click fiar_main_category will be hidden' 
    $(".nav-item[role]").click(function() {
        $(".fiar_main_category").hide();
    });
    $(".fiar_title").click(function() {
       $(".fiar_main_category").show();
        $("#tab_details").hide();
        $('.submenu').removeClass('show');
    });
    $(document).on('click', 'ul.pagination li', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    //Tab content for coins & promotion 
    clickBtn.coin_tab.click(function() {
        tabFuncAdd('.fiar_coins');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_coupon.active') || $('.fiar_freebies.active') || $('.fiar_campaingn.active')) {
            tabFuncRemove('.fiar_coupon');
            tabFuncRemove('.fiar_freebies');
            tabFuncRemove('.fiar_campaingn');
        }
        allTabContentBtn(allBtn[0]);
    });
    clickBtn.coupon_tab.click(function() {
        tabFuncAdd('.fiar_coupon');
        tabFuncRemove('.fiar_coins');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_coins.active') || $('.fiar_freebies.active') || $('.fiar_campaingn.active')) {
            tabFuncRemove('.fiar_coins');
            tabFuncRemove('.fiar_freebies');
            tabFuncRemove('.fiar_campaingn');
        }
        allTabContentBtn(allBtn[0]);
    });
    clickBtn.freebies_tab.click(function() {
        tabFuncAdd('.fiar_freebies');
        tabFuncRemove('.fiar_coupon');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_coins.active') || $('.fiar_coupon.active') || $('.fiar_campaingn.active')) {
            tabFuncRemove('.fiar_coins');
            tabFuncRemove('.fiar_coupon');
            tabFuncRemove('.fiar_campaingn');
        }
        allTabContentBtn(allBtn[0]);
    });
    clickBtn.campaingn_tab.click(function() {
        tabFuncAdd('.fiar_campaingn');
        tabFuncRemove('.fiar_freebies');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_coins.active') || $('.fiar_coupon.active') || $('.fiar_freebies.active')) {
            tabFuncRemove('.fiar_coins');
            tabFuncRemove('.fiar_coupon');
            tabFuncRemove('.fiar_freebies');
        }
        allTabContentBtn(allBtn[0]);
    });
    //Tab content for account management
    clickBtn.registration_tab.click(function() {
        tabFuncAdd('.fiar_registration');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_account.active') || $('.fiar_aliexpress.active') || $('.fiar_find.active') || $('.fiar_unavailable.active') || $('.fiar_alipay.active') || $('.fiar_data_subject.active')) {
            tabFuncRemove('.fiar_account');
            tabFuncRemove('.fiar_aliexpress');
            tabFuncRemove('.fiar_find');
            tabFuncRemove('.fiar_unavailable');
            tabFuncRemove('.fiar_alipay');
            tabFuncRemove('.fiar_data_subject');
        }
        allTabContentBtn(allBtn[1]);
    });
    clickBtn.account_tab.click(function() {
        tabFuncAdd('.fiar_account');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_registration.active') || $('.fiar_aliexpress.active') || $('.fiar_find.active') || $('.fiar_unavailable.active') || $('.fiar_alipay.active') || $('.fiar_data_subject.active')) {
            tabFuncRemove('.fiar_registration');
            tabFuncRemove('.fiar_aliexpress');
            tabFuncRemove('.fiar_find');
            tabFuncRemove('.fiar_unavailable');
            tabFuncRemove('.fiar_alipay');
            tabFuncRemove('.fiar_data_subject');
        }
        allTabContentBtn(allBtn[1]);
    });
    clickBtn.aliexpress_tab.click(function() {
        tabFuncAdd('.fiar_aliexpress');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_registration.active') || $('.fiar_account.active') || $('.fiar_find.active') || $('.fiar_unavailable.active') || $('.fiar_alipay.active') || $('.fiar_data_subject.active')) {
            tabFuncRemove('.fiar_registration');
            tabFuncRemove('.fiar_account');
            tabFuncRemove('.fiar_find');
            tabFuncRemove('.fiar_unavailable');
            tabFuncRemove('.fiar_alipay');
            tabFuncRemove('.fiar_data_subject');
        }
        allTabContentBtn(allBtn[1]);
    });
    clickBtn.find_tab.click(function() {
        tabFuncAdd('.fiar_find');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_registration.active') || $('.fiar_account.active') || $('.fiar_aliexpress.active') || $('.fiar_unavailable.active') || $('.fiar_alipay.active') || $('.fiar_data_subject.active')) {
            tabFuncRemove('.fiar_registration');
            tabFuncRemove('.fiar_account');
            tabFuncRemove('.fiar_aliexpress');
            tabFuncRemove('.fiar_unavailable');
            tabFuncRemove('.fiar_alipay');
            tabFuncRemove('.fiar_data_subject');
        }
        allTabContentBtn(allBtn[1]);
    });
    clickBtn.unavailable_tab.click(function() {
        tabFuncAdd('.fiar_unavailable');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_registration.active') || $('.fiar_account.active') || $('.fiar_aliexpress.active') || $('.fiar_find.active') || $('.fiar_alipay.active') || $('.fiar_data_subject.active')) {
            tabFuncRemove('.fiar_registration');
            tabFuncRemove('.fiar_account');
            tabFuncRemove('.fiar_aliexpress');
            tabFuncRemove('.fiar_find');
            tabFuncRemove('.fiar_alipay');
            tabFuncRemove('.fiar_data_subject');
        }
        allTabContentBtn(allBtn[1]);
    });
    clickBtn.alipay_tab.click(function() {
        tabFuncAdd('.fiar_alipay');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_registration.active') || $('.fiar_account.active') || $('.fiar_aliexpress.active') || $('.fiar_find.active') || $('.fiar_unavailable.active') || $('.fiar_data_subject.active')) {
            tabFuncRemove('.fiar_registration');
            tabFuncRemove('.fiar_account');
            tabFuncRemove('.fiar_aliexpress');
            tabFuncRemove('.fiar_find');
            tabFuncRemove('.fiar_unavailable');
            tabFuncRemove('.fiar_data_subject');
        }
        allTabContentBtn(allBtn[1]);
    });
    clickBtn.data_subject_tab.click(function() {
        tabFuncAdd('.fiar_data_subject');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_registration.active') || $('.fiar_account.active') || $('.fiar_aliexpress.active') || $('.fiar_find.active') || $('.fiar_unavailable.active') || $('.fiar_alipay.active')) {
            tabFuncRemove('.fiar_registration');
            tabFuncRemove('.fiar_account');
            tabFuncRemove('.fiar_aliexpress');
            tabFuncRemove('.fiar_find');
            tabFuncRemove('.fiar_unavailable');
            tabFuncRemove('.fiar_alipay');
        }
        allTabContentBtn(allBtn[1]);
    });
    //Tab content for product selection
    clickBtn.searching_tab.click(function() {
        tabFuncAdd('.fiar_searching');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_shopping.active')) {
            tabFuncRemove('.fiar_shopping');
        }
        allTabContentBtn(allBtn[2]);
    });
    clickBtn.shopping_tab.click(function() {
        tabFuncAdd('.fiar_shopping');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_searching.active')) {
            tabFuncRemove('.fiar_searching');
        }
        allTabContentBtn(allBtn[2]);
    });
    //Tab content for ordering & payment
    clickBtn.ordering_tab.click(function() {
        tabFuncAdd('.fiar_ordering');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_payment.active') || $('.fiar_order_management.active')) {
            tabFuncRemove('.fiar_payment');
            tabFuncRemove('.fiar_order_management');
        }
        allTabContentBtn(allBtn[3]);
    });
    clickBtn.payment_tab.click(function() {
        tabFuncAdd('.fiar_payment');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_ordering.active') || $('.fiar_order_management.active')) {
            tabFuncRemove('.fiar_ordering');
            tabFuncRemove('.fiar_order_management');
        }
        allTabContentBtn(allBtn[3]);
    });
    clickBtn.order_management_tab.click(function() {
        tabFuncAdd('.fiar_order_management');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_ordering.active') || $('.fiar_payment.active')) {
            tabFuncRemove('.fiar_payment');
            tabFuncRemove('.fiar_ordering');
        }
        allTabContentBtn(allBtn[3]);
    });
    //Tab content for awaiting order arrival
    clickBtn.wait_for_seller_tab.click(function() {
        tabFuncAdd('.fiar_wait_for_seller');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_report_not_receiving.active')) {
            tabFuncRemove('.fiar_report_not_receiving');
        }
        allTabContentBtn(allBtn[4]);
    });
    clickBtn.report_not_receiving_tab.click(function() {
        tabFuncAdd('.fiar_report_not_receiving');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_wait_for_seller.active')) {
            tabFuncRemove('.fiar_wait_for_seller');
        }
        allTabContentBtn(allBtn[4]);
    });
    //Tab content for aftersales
    clickBtn.report_product_issue_tab.click(function() {
        tabFuncAdd('.fiar_report_product_issue');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_free_return.active') || $('.fiar_warranty.active')) {
            tabFuncRemove('.fiar_free_return');
            tabFuncRemove('.fiar_warranty');
        }
        allTabContentBtn(allBtn[5]);
    });
    clickBtn.free_return_tab.click(function() {
        tabFuncAdd('.fiar_free_return');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_report_product_issue.active') || $('.fiar_warranty.active')) {
            tabFuncRemove('.fiar_report_product_issue');
            tabFuncRemove('.fiar_warranty');
        }
        allTabContentBtn(allBtn[5]);
    });
    clickBtn.warranty_tab.click(function() {
        tabFuncAdd('.fiar_warranty');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_free_return.active') || $('.fiar_report_product_issue.active')) {
            tabFuncRemove('.fiar_report_product_issue');
            tabFuncRemove('.fiar_free_return');
        }
        allTabContentBtn(allBtn[5]);
    });
    //Tab content for refund
    clickBtn.refund_process_tab.click(function() {
        tabFuncAdd('.fiar_refund_process');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_not_received_refund.active') || $('.fiar_received_the_less.active')) {
            tabFuncRemove('.fiar_not_received_refund');
            tabFuncRemove('.fiar_received_the_less');
        }
        allTabContentBtn(allBtn[6]);
    });
    clickBtn.not_received_refund_tab.click(function() {
        tabFuncAdd('.fiar_not_received_refund');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_refund_process.active') || $('.fiar_received_the_less.active')) {
            tabFuncRemove('.fiar_refund_process');
            tabFuncRemove('.fiar_received_the_less');
        }
        allTabContentBtn(allBtn[6]);
    });
    clickBtn.received_the_less_tab.click(function() {
        tabFuncAdd('.fiar_received_the_less');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_not_received_refund.active') || $('.fiar_refund_process.active')) {
            tabFuncRemove('.fiar_refund_process');
            tabFuncRemove('.fiar_not_received_refund');
        }
        allTabContentBtn(allBtn[6]);
    });
    //Tab content for feedback
    clickBtn.our_feedback_tab.click(function() {
        tabFuncAdd('.fiar_our_feedback');
        $(".fiar_faq_current").hide();
        allTabContentBtn(allBtn[7]);
    });
    //Tab content for rules & policy
    clickBtn.aliexpress_rules_tab.click(function() {
        tabFuncAdd('.fiar_aliexpress_rules');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_ipr.active')) {
            tabFuncRemove('.fiar_ipr');
        }
        allTabContentBtn(allBtn[8]);
    });
    clickBtn.ipr_tab.click(function() {
        tabFuncAdd('.fiar_ipr');
        $(".fiar_faq_current").hide();
        bothRemove(".current_page_links", ".fiar_faq_current .fiar_faq_next");
        if($('.fiar_aliexpress_rules.active')) {
            tabFuncRemove('.fiar_aliexpress_rules');
        }
        allTabContentBtn(allBtn[8]);
    });
    //Tab content for communication
    clickBtn.message_center_tab.click(function() {
        tabFuncAdd('.fiar_message_center');
        $(".fiar_faq_current").hide();
        allTabContentBtn(allBtn[9]);
    });
    //Tab content for other
    clickBtn.aliexpress_introduce_tab.click(function() {
        tabFuncAdd('.fiar_aliexpress_introduce');
        $(".fiar_faq_current").hide();
        if($('.fiar_other.active')) {
            tabFuncRemove('.fiar_other');
        }
        allTabContentBtn(allBtn[10]);
    });
    clickBtn.other_tab.click(function() {
        tabFuncAdd('.fiar_other');
        $(".fiar_faq_current").hide();
        if($('.fiar_aliexpress_introduce.active')) {
            tabFuncRemove('.fiar_aliexpress_introduce');
        }
        allTabContentBtn(allBtn[10]);
    });
});
