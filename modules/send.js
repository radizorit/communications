module.exports.send = function send(response, version) {
    if(version == 'phone') {
        console.log(`${response.destination} is sent a message! The message 
                    "${response.message}" through ${version}, thanks to the helpful guys at Twilio`)
    } else if(version == 'email') {
        console.log(`${response.destination} is sent a message! The message 
                    "${response.message}" through ${version}, thanks to the helpful guys at SendGrid`)
    }
}

/*
$url = "https://api.twilio.com/2010-04-01/Accounts/AC075808bbdaebc7adabee83a26637bb6f/Messages.json"
                $params = @{ To = "+16267823475"; From = "+19794919652"; Body = "Hello from Twilio" }
                $secret = "e3315c777fc200e1dc7906db60715ab9" | ConvertTo-SecureString -asPlainText -Force
                $credential = New-Object System.Management.Automation.PSCredential(AC075808bbdaebc7adabee83a26637bb6f, $secret)
                Invoke-WebRequest $url -Method Post -Credential $credential -Body $params -UseBasicParsing | ConvertFrom-Json | Select sid, body
*/