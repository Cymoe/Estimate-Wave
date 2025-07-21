# Close CRM + AI Setup Guide (Option 3)

## Your "Goated" Setup 🐐

### Step 1: Choose Your AI Platform

**Recommended: Bland AI** (Best Close Integration)
- Go to [bland.ai](https://bland.ai)
- Sign up for their $49/month plan
- They have native Close CRM integration
- Can handle SMS, web chat, and phone calls
- AI sounds incredibly human

**Alternative: Vapi.ai** (More Customizable)
- $29/month starting
- Also integrates with Close
- Better for complex conversation flows

### Step 2: Connect Bland AI to Close

1. In Bland AI dashboard:
   - Click "Integrations" → "Close CRM"
   - Enter your Close API key
   - Map fields:
     - Conversation → Close Activity
     - Qualified Lead → Close Lead
     - Hot Lead → Close Task for you

2. Set up AI personality:
   ```
   You are Myles from Estimate Wave. You help contractors build their reputation 
   and attract premium clients. Be conversational, helpful, and focus on 
   understanding their challenges. Never mention you're AI.
   ```

### Step 3: Create Conversation Flows

**Initial Greeting Flow:**
```
AI: "Hey! Thanks for reaching out to Estimate Wave. I help contractors dominate 
their local market. What type of work do you specialize in?"

[Contractor responds]

AI: "Nice! How long have you been in [their trade]? I work with a lot of 
[trade] contractors in [their area]."
```

**Qualification Questions:**
1. Type of contracting work
2. Years in business  
3. Current monthly revenue
4. Biggest challenge getting customers
5. Service area

**Handoff Triggers** (When AI alerts you):
- "How much does it cost"
- "Ready to get started"
- "Can you guarantee"
- Any pricing questions
- High intent signals

### Step 4: Instagram Integration

Since Instagram is your money channel:

1. Use **ManyChat** ($15/month) for Instagram
2. Connect ManyChat → Zapier → Close CRM
3. When someone DMs on Instagram:
   - ManyChat captures it
   - Zapier creates lead in Close
   - Bland AI can follow up via SMS

### Step 5: SMS/WhatsApp Setup

1. Get a Twilio number ($1/month + usage)
2. Connect Twilio to Bland AI
3. Update your website with the Twilio number
4. All texts go through AI first, then to you if qualified

### Step 6: Website Implementation

Update your chat modal:
```javascript
// Add tracking for Close CRM
function openChatModal() {
    // Track in Close via API
    fetch('https://api.close.com/api/v1/activity/', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic YOUR_API_KEY',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            lead_id: 'YOUR_LEAD_ID',
            type: 'ChatModalOpened',
            source: 'Website'
        })
    });
    
    // Open modal
    document.getElementById('chatModal').classList.add('active');
}
```

### Step 7: The Complete Flow

1. **Visitor clicks "Start a Conversation"**
2. **Chooses channel** (Instagram/SMS/WhatsApp)
3. **AI responds** within 30 seconds
4. **AI qualifies** them with natural conversation
5. **If qualified**, AI says: "This sounds like a great fit! Myles will personally reach out within the next few minutes to discuss your specific situation."
6. **You get notified** in Close with full context
7. **You close the deal** with a warm, qualified lead

### Step 8: AI Training Data

Feed your AI these successful conversation examples:

**Good Lead Example:**
```
Lead: "I need help getting more high-end kitchen remodel jobs"
AI: "Kitchen remodels are great for building reputation! What's your average project size right now?"
Lead: "Usually around $30-40k"
AI: "Perfect, we specialize in helping contractors like you attract $50k+ kitchen projects. How many leads are you getting monthly?"
Lead: "Maybe 2-3, but half are tire kickers"
AI: "That's exactly what we fix. Myles has helped similar contractors get 10-15 pre-qualified leads who already know your pricing. He'll reach out in the next 5 minutes to share exactly how we'd do this for you."
[HANDOFF TO HUMAN]
```

### Weekly Tasks (15 minutes)

1. Review AI conversations in Close
2. Update AI responses based on what works
3. Add new FAQ answers
4. Check conversion rates by channel

### ROI Calculation

- Cost: ~$100/month (Bland + ManyChat + Twilio)
- Time saved: 10+ hours/week on initial conversations
- Conversion increase: 3-5x (based on research)
- Only talk to qualified leads

## Quick Start Checklist

- [ ] Sign up for Bland AI
- [ ] Get Close API key
- [ ] Connect Bland to Close
- [ ] Set up AI personality
- [ ] Create 5 qualification questions
- [ ] Update website with real phone numbers
- [ ] Test each channel
- [ ] Train AI on your best conversations

This setup will have you talking ONLY to qualified leads while AI handles all the "how much?" and "what do you do?" messages. True leverage! 🚀