# Third-Party App Audit Guide - Kodiak Wholesale

## 🎯 **GOAL: Reduce 481 requests to <300 requests**

Based on your GTmetrix report showing 481 requests on mobile, many of these are likely from third-party Shopify apps. Here's how to audit and optimize:

## 📊 **Current Third-Party Scripts Identified in Code:**

### **Analytics & Tracking (High Request Count)**
1. **VWO (Visual Website Optimizer)** - A/B testing platform
2. **TriplePixel** - Advanced analytics tracking  
3. **Microsoft Clarity** - Heatmap and session recordings
4. **Bing UET** - Microsoft advertising tracking
5. **Google Analytics** - Standard web analytics

### **Apps Likely Present (Based on 481 Requests)**
- **Review apps** (Loox mentioned in code)
- **Chat widgets** (Live chat mentioned)
- **Payment apps** (PayPal, Apple Pay, etc.)
- **Email marketing** (popup subscriptions)
- **Social media pixels** (Facebook, Instagram)
- **Conversion tracking** (multiple pixels)

## 🔍 **How to Audit Your Shopify Apps:**

### **Step 1: Access Shopify Admin**
1. Go to Shopify Admin > Apps
2. Review all installed apps
3. Check "App usage" in Analytics

### **Step 2: Identify High-Impact Apps to Remove**
**Remove these types if not essential:**
- **Duplicate analytics** (keep only Google Analytics + 1 other)
- **Unused social media pixels** 
- **Old review apps** (if using multiple)
- **Abandoned A/B testing tools**
- **Redundant chat widgets**
- **Unused payment methods**

### **Step 3: Apps to Keep (High ROI)**
- **Primary analytics** (Google Analytics)
- **Active review system** (if driving conversions)
- **Essential payment methods** (PayPal if used)
- **Live chat** (if actively monitored)

## ⚡ **Immediate Actions You Can Take:**

### **High-Impact Removals (50-100 Request Reduction)**
1. **Disable VWO** if not actively A/B testing
2. **Remove Microsoft Clarity** if Google Analytics is sufficient
3. **Disable Bing UET** if not running Microsoft ads
4. **Remove unused social pixels**

### **Script Optimization (Already Implemented)**
✅ **TriplePixel** - Now loads after user interaction
✅ **Clarity** - Now loads after user interaction  
✅ **Bing UET** - Now loads after user interaction

## 📈 **Expected Impact:**

| Action | Request Reduction | Performance Impact |
|--------|------------------|-------------------|
| Remove 3-5 unused apps | -100 to -150 requests | Major TTI improvement |
| Optimize remaining scripts | -50 to -100 requests | Significant TBT reduction |
| **Total Expected** | **-150 to -250 requests** | **481 → ~230-330 requests** |

## 🎯 **Shopify Admin Actions:**

### **To Remove an App:**
1. Shopify Admin > Apps
2. Click app name
3. "Delete app" or "Uninstall"
4. **Important:** Clear app code from theme if needed

### **To Check App Performance Impact:**
1. Use GTmetrix before/after removal
2. Monitor for 24-48 hours
3. Check conversion rates don't drop

## ⚠️ **Apps That May Need Code Cleanup:**

Some apps leave code in your theme after uninstall:
- Check `layout/theme.liquid` for app scripts
- Review `sections/` for app blocks
- Clean `snippets/` of app-related files

## 🚀 **Next Steps:**

1. **Audit apps in Shopify Admin** (30 minutes)
2. **Remove 3-5 unused apps** (immediate impact)
3. **Test site functionality** (ensure nothing breaks)
4. **Run new GTmetrix test** (measure improvement)

**Target Result:** 481 requests → ~250-300 requests (-40% to -50%!)
